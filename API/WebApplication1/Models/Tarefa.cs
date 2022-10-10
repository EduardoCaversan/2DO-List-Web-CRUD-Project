using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Tarefa
    {
        public Tarefa() 
        {
        
        }
        public Tarefa(string Nome, bool Concluida = false)
        {
            this.Nome = Nome;
            this.Concluida = Concluida;
            this.DataCRIA = DateTime.Now;
        }
        public int Id { get; set; }
        public string Nome { get; set; }
        public Boolean Concluida { get; set; }
        public DateTime? DataCONC { get; set; }
        public DateTime DataCRIA { get; set; }
    }
}
