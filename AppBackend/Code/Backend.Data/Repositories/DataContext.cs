using Backend.Entities.Entities;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace Backend.Data.Repositories
{
    public class DataContext : DbContext
    {        
        public DataContext(DbContextOptions<DataContext> options): base(options) 
        {
            try
            {
                var databaseCreator = (Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator);
                databaseCreator.CreateTables();
            }
            catch (SqlException) { }
            
        }

        // Don't delete the below comment.
        // Dbset variables
		public DbSet<ElectricalandElectronicsEngineering> ElectricalandElectronicsEngineering { get; set; }
		public DbSet<InformationTechnology> InformationTechnology { get; set; }
               

    }
}
