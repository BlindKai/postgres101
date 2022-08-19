import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE pupils (
        pupil_id uuid DEFAULT uuid_generate_v4(),
        classroom_id uuid NOT NULL,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50),
        gender VARCHAR(50),
        CONSTRAINT pupil_pk PRIMARY KEY (pupil_id),
        CONSTRAINT pupil_name_un UNIQUE (first_name, last_name),
        CONSTRAINT pupil_classroom_fk FOREIGN KEY (classroom_id) REFERENCES classrooms (classroom_id) ON UPDATE CASCADE ON DELETE CASCADE
    );`);
}

export async function down(knex: Knex): Promise<void> {
    await knex.raw(`DROP TABLE pupils CASCADE;`)
}
