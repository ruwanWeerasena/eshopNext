BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Orders] (
    [id] INT NOT NULL IDENTITY(1,1),
    [customerId] INT NOT NULL,
    [orderDate] DATETIME2 NOT NULL,
    [streetAddress] NVARCHAR(1000) NOT NULL,
    [city] NVARCHAR(1000) NOT NULL,
    [state] NVARCHAR(1000) NOT NULL,
    [paymentMethod] NVARCHAR(1000) NOT NULL,
    [total] DECIMAL(32,16) NOT NULL,
    CONSTRAINT [Orders_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[OrderDetails] (
    [id] INT NOT NULL IDENTITY(1,1),
    [orderId] INT NOT NULL,
    [productId] INT NOT NULL,
    [quantity] INT NOT NULL,
    [price] DECIMAL(32,16) NOT NULL,
    CONSTRAINT [OrderDetails_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Orders] ADD CONSTRAINT [Orders_customerId_fkey] FOREIGN KEY ([customerId]) REFERENCES [dbo].[Customer]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetails] ADD CONSTRAINT [OrderDetails_orderId_fkey] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Orders]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetails] ADD CONSTRAINT [OrderDetails_productId_fkey] FOREIGN KEY ([productId]) REFERENCES [dbo].[Product]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
