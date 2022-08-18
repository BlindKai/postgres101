import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE subjects (
        subject_id serial NOT NULL,
        "name" varchar NOT NULL,
        CONSTRAINT subjects_pk PRIMARY KEY (subject_id),
        CONSTRAINT subjects_un UNIQUE ("name")
    );`);
}

export async function down(knex: Knex): Promise<void> {
    await knex.raw(`DROP table subjects;`)
}
