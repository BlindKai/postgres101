import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE schools (
        school_id uuid NOT NULL DEFAULT uuid_generate_v4(),
        name varchar NOT NULL,
        address varchar NOT NULL,
        director_id uuid,
        CONSTRAINT schools_pk PRIMARY KEY (school_id),
        CONSTRAINT school_director_fk FOREIGN KEY (director_id) REFERENCES teachers (teacher_id) ON UPDATE CASCADE ON DELETE SET NULL
    );`);

  await knex.raw(`
    ALTER TABLE teachers ADD CONSTRAINT teacher_school_fk FOREIGN KEY (school_id) REFERENCES schools (school_id) ON UPDATE CASCADE ON DELETE SET NULL;
    `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`ALTER TABLE teachers DROP CONSTRAINT teacher_school_fk;`);
  await knex.raw(`DROP TABLE schools CASCADE;`);
}
