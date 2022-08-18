import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("subjects").del();

  await knex("subjects").insert([
    { subject_id: 1, name: "English" },
    { subject_id: 2, name: "Math" },
    { subject_id: 3, name: "Art" },
    { subject_id: 4, name: "Science" },
    { subject_id: 5, name: "History" },
    { subject_id: 6, name: "Music" },
    { subject_id: 7, name: "Geography" },
    { subject_id: 8, name: "Physical Education" },
    { subject_id: 9, name: "Drama" },
    { subject_id: 10, name: "Biology" },
    { subject_id: 11, name: "Chemistry" },
    { subject_id: 12, name: "Physics" },
    { subject_id: 13, name: "Information Technology" },
    { subject_id: 14, name: "Foreign languages" },
    { subject_id: 15, name: "Social studies" },
    { subject_id: 16, name: "Technology" },
    { subject_id: 17, name: "Philosophy" },
    { subject_id: 18, name: "Graphic design" },
    { subject_id: 19, name: "Literature" },
    { subject_id: 20, name: "Algebra" },
    { subject_id: 21, name: "Geometry" },
  ]);
}
