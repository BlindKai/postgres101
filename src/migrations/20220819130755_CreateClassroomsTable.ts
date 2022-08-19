import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE classrooms (
        classroom_id uuid NOT NULL DEFAULT uuid_generate_v4(),
        grade smallint NOT NULL,
        school_id uuid NOT NULL,
        classroom_teacher_id uuid,
        CONSTRAINT classrooms_pk PRIMARY KEY (classroom_id),
        CONSTRAINT classrooms_grades_un UNIQUE (school_id, "grade"),
        CONSTRAINT classroom_teacher_fk FOREIGN KEY (classroom_teacher_id) REFERENCES teachers (teacher_id) ON UPDATE CASCADE ON DELETE SET NULL,
        CONSTRAINT classroom_school_fk FOREIGN KEY (school_id) REFERENCES schools (school_id) ON UPDATE CASCADE ON DELETE CASCADE
    );`);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`DROP table classrooms CASCADE;`);
}
