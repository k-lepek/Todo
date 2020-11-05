using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using todo.Model;

namespace todo.Repositories
{
    public interface IRepositoryTodo
    {
        List<TodoModel> GetTodos();
        TodoModel GetTodoByID(int todoId);
        TodoModel InsertTodo(string todoText);
        TodoModel SetStateToDeleted(int todoId, bool state);
    }
}