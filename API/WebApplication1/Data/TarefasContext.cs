using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using WebApplication1.Models;
using DbContext = Microsoft.EntityFrameworkCore.DbContext;

namespace EFCore.WebApplication1.Data
{
    public class TarefasContext: DbContext
    {
        public Microsoft.EntityFrameworkCore.DbSet<Tarefa> Tarefas { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=TODOList;Data Source=SIMBA");
            optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole((optionsBuilder) => { })));
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Tarefas>().HasData(new List<Tarefas>()
            //{
            //  new Tarefas(1, "Eduardo", true),
              
            //});
        }
    }
}
