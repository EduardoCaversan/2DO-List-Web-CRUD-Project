using EFCore.WebApplication1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Linq;
using WebApplication1.DTO;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class TarefasController : ControllerBase
  {
    private TarefasContext DbContext;

    public TarefasController(TarefasContext dbContext)
    {
      DbContext = dbContext;
    }

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        var tarefas = DbContext.Tarefas;
        return Ok(JsonConvert.SerializeObject(tarefas));
      }
      catch (Exception ex)
      {
        return BadRequest($"Erro: {ex.Message}");
      }
    }
    [HttpPost]
    public IActionResult Post([FromBody] CriarTarefa body)
    {
      try
      {
        if (string.IsNullOrEmpty(body.Nome))
        {
          return BadRequest("A tarefa não pode ser vazia!");
        }
        var tarefa = new Tarefa(
                Nome: body.Nome
                );

        DbContext.Tarefas.Add(tarefa);
        DbContext.SaveChanges();
        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest($"Erro: {ex.Message}");
      }
    }

    [HttpPut("Nome/{Id}")]
    public IActionResult Put([FromBody] CriarTarefa body, [FromRoute] int Id)
    {
      try
      {
        if (string.IsNullOrEmpty(body.Nome))
        {
          return BadRequest("A tarefa não pode ser vazia!");
        }
        var tarefa = DbContext.Tarefas.SingleOrDefault(t => t.Id == Id);
        if (tarefa == null)
        {
          return NotFound("Não existe uma tarefa que corresponda esse Id!");
        }
        tarefa.Nome = body.Nome;
        DbContext.Tarefas.Update(tarefa);
        DbContext.SaveChanges();
        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest($"Erro: {ex.Message}");
      }

    }
    [HttpPut("Concluida/{Id}")]
    public IActionResult Put([FromBody] TarefaDelete body, [FromRoute] int Id)
    {
      try
      {
        var tarefa = DbContext.Tarefas.SingleOrDefault(t => t.Id == Id);
        if (tarefa == null)
        {
          return NotFound("Não existe uma tarefa que corresponda esse Id!");
        }
        if (body.Concluida)
        {
          tarefa.DataCONC = DateTime.Now;
        }
        else
        {
          tarefa.DataCONC = null;
        }
        tarefa.Concluida = body.Concluida;
        DbContext.Tarefas.Update(tarefa);
        DbContext.SaveChanges();
        return Ok();

      }
      catch (Exception ex)
      {
        return BadRequest($"Erro: {ex.Message}");
      }
    }
    [HttpDelete("{Id}")]
    public IActionResult Delete([FromRoute] int Id)
    {
      var removetarefa = DbContext.Tarefas.SingleOrDefault(t => t.Id == Id);

      if (removetarefa != null)
      {
        DbContext.Tarefas.Remove(removetarefa);
        DbContext.SaveChanges();
        return Ok();
      }
      else
      {
        return NotFound("Não existe uma tarefa que corresponda esse Id!");
      }
    }

  }
}
