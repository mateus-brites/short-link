-- DropForeignKey
ALTER TABLE "short_url" DROP CONSTRAINT "short_url_userId_fkey";

-- AlterTable
ALTER TABLE "short_url" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "short_url" ADD CONSTRAINT "short_url_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
