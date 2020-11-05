using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using todo.Model;
using todo.Repositories;

namespace todo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : Controller
    {
        private static IRepositoryTodo _todos;
        public TodoController(IRepositoryTodo todos)
        {
            _todos = todos;
        }

        [HttpGet]
        public IEnumerable<TodoModel> Get()
        {  
            return _todos.GetTodos();
        }

        [HttpPost]
        public TodoModel Add([FromBody] string todoText)
        {
            return _todos.InsertTodo(todoText);
        }

        [HttpPut]
        public TodoModel ChangeState([FromQuery]int todoId, [FromQuery]bool todoState)
        {
            return _todos.SetStateToDeleted(todoId, todoState);
        }
    }
}