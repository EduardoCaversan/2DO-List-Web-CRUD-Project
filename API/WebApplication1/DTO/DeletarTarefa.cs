using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DTO
{
    public class DeletarTarefa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public Boolean Concluida { get; set; }
        public DateTime? DataCONC { get; set; }
        public DateTime DataCRIA { get; set; }
    }
}
