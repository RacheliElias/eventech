using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace EventTekAPI.Controllers
{
    public class CustomerController : ApiController
    {
    EventsEntities DB =new EventsEntities();
 
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        [ResponseType(typeof(Customers))]
        // POST api/<controller>
        public IHttpActionResult addCustomer(string id)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //DB.Customers.Add(c);
            //DB.SaveChanges();
            return Ok("hello");
            
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
            
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}