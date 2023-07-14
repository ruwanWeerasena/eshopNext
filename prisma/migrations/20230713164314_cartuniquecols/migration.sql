/*
  Warnings:

  - A unique constraint covering the columns `[productId,customerId]` on the table `CartDetails` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[CartDetails] ADD CONSTRAINT [CartDetails_productId_customerId_key] UNIQUE NONCLUSTERED ([productId], [customerId]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
