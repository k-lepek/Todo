using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todo.Model
{
    public class TodoModel
    {
        public int TodoId { get; set; }
        public string Name { get; set; }
        public bool State { get; set; }
    }
}
