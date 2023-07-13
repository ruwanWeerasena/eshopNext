BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[CartDetails] (
    [id] INT NOT NULL IDENTITY(1,1),
    [productId] INT NOT NULL,
    [quantity] INT NOT NULL,
    [customerId] INT NOT NULL,
    CONSTRAINT [CartDetails_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[CartDetails] ADD CONSTRAINT [CartDetails_productId_fkey] FOREIGN KEY ([productId]) REFERENCES [dbo].[Product]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CartDetails] ADD CONSTRAINT [CartDetails_customerId_fkey] FOREIGN KEY ([customerId]) REFERENCES [dbo].[Customer]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
