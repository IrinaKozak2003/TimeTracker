using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;

namespace Time_Tracker.Models;

public class Role: MongoIdentityRole<Guid>
{
  private string RoleName { set; get; } = null!;
}