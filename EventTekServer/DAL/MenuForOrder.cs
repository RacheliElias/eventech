//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class MenuForOrder
    {
        public int MenuForOrderId { get; set; }
        public int MenuID { get; set; }
        public int CategoryNum { get; set; }
        public int FoodId { get; set; }
    
        public virtual Foods Foods { get; set; }
        public virtual Menu Menu { get; set; }
    }
}
