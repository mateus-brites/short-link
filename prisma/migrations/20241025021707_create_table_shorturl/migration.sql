-- CreateTable
CREATE TABLE "short_url" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "shorting" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "short_url_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "short_url" ADD CONSTRAINT "short_url_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
