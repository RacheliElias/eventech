using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using System.Web.Http.Description;

namespace EventTekAPI.Controllers
{
    public class menuController : ApiController
    {
        EventsEntities DB = new EventsEntities();
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

        // POST api/<controller>
        [HttpPost]
        [ResponseType(typeof(Menu))]
        public IHttpActionResult addMenuToEventOrder(Mc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            DB.Menu.Add(menu);
            DB.SaveChanges();
            return Ok(menu);
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