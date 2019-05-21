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
    public class OrderController : ApiController
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
        [ResponseType(typeof(Order))]
        public IHttpActionResult add_kind_date_timeToDB(int idCustomer,string kind,int Time,DateTime date)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Order o=DB.Order.Add(new Order {CustomerId= idCustomer,OrderDate=DateTime.Now,MorningOrEvening=Time,EventDate=date,EventKind=kind});
           

            DB.SaveChanges();
            return Ok(o);

        }

        [HttpPost]
        [ResponseType(typeof(Order))]
        public IHttpActionResult orderNewEvent(Order order,PayMents payment, Menu menu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            DB.Order.Add(order);

            DB.PayMents.Add(payment);
        
        DB.Menu.Add(menu);

            DB.SaveChanges();
            return Ok(order);
        }


        // PUT api/<controller>/5
        public void update(int id, [FromBody]string value)
        {
            
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}