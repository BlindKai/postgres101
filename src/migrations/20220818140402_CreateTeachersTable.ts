import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
   CREATE TABLE teachers (
        teacher_id uuid NOT NULL DEFAULT uuid_generate_v4(),
        first_name varchar NOT NULL,
        last_name varchar NOT NULL,
        email varchar,
        gender varchar,
        subject_id int,
        school_id uuid,
        CONSTRAINT teachers_pk PRIMARY KEY (teacher_id),
        CONSTRAINT teacher_subject_fk FOREIGN KEY (subject_id) REFERENCES subjects (subject_id) ON UPDATE CASCADE ON DELETE SET NULL
    );`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP TABLE teachers CASCADE;`);
}
