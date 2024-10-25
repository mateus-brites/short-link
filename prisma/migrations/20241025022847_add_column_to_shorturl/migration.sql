/*
  Warnings:

  - Added the required column `clicks` to the `short_url` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `short_url` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `short_url` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `short_url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "short_url" ADD COLUMN     "clicks" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
