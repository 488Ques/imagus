import type { Kysely } from "kysely";

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable("bookmark_item")
		.addColumn("id", "serial", (col) => col.primaryKey())
		.addColumn("name", "varchar")
		.addColumn("link", "varchar")
		.addColumn("note", "varchar")
		.execute();
}

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable("bookmark_item").execute();
}
