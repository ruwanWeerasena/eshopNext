BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Brand] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Brand_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Brand_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [price] DECIMAL(32,16) NOT NULL,
    [pictureFileName] NVARCHAR(1000) NOT NULL,
    [pictureUri] NVARCHAR(1000) NOT NULL CONSTRAINT [Product_pictureUri_df] DEFAULT 'http://localhost:3000/images/',
    [brandId] INT NOT NULL,
    [availableStock] INT NOT NULL,
    [restockThreshold] INT NOT NULL CONSTRAINT [Product_restockThreshold_df] DEFAULT 50,
    [maxStockThreshold] INT NOT NULL CONSTRAINT [Product_maxStockThreshold_df] DEFAULT 100,
    [onRecorder] INT NOT NULL CONSTRAINT [Product_onRecorder_df] DEFAULT 1,
    CONSTRAINT [Product_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Product_name_key] UNIQUE NONCLUSTERED ([name])
);

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [Product_brandId_fkey] FOREIGN KEY ([brandId]) REFERENCES [dbo].[Brand]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
