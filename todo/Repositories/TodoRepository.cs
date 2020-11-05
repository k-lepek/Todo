using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using todo.Model;

namespace todo.Repositories
{
    public class TodoRepository : IRepositoryTodo
    {
        private readonly List<TodoModel> _todos;

        public TodoRepository()
        {
            _todos = new List<Model.TodoModel>()
            {
        
            };
        }

        public void DeleteTodo(int todoId)
        {
            TodoModel todo = _todos.Where(x => x.TodoId == todoId).FirstOrDefault();
            _todos.Remove(todo);
        }

        public TodoModel GetTodoByID(int todoId)
        {
            throw new NotImplementedException();
        }

        public List<TodoModel> GetTodos()
        {
            return _todos;
        }

        public TodoModel InsertTodo(string todoText)
        {
            var newestTodo = _todos.OrderByDescending(i => i.TodoId).FirstOrDefault();
            int idForNewTodo = newestTodo != null ? newestTodo.TodoId + 1 : 1;
            TodoModel todo = new TodoModel() { Name = todoText, TodoId = idForNewTodo };

            _todos.Add(todo);
            return todo;
        }

        public TodoModel SetStateToDeleted(int todoId, bool state)
        {
            TodoModel todo = _todos.Where(x => x.TodoId == todoId).FirstOrDefault();
            todo.State = state;
            return todo;
        }
    }
}
