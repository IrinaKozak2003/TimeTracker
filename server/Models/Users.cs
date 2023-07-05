using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace Time_Tracker.Models;

public class User:MongoIdentityUser<Guid>
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")]
    public string UserName { get; set; } = null!;
    public string UserPassword { get; set; } = null!;
    public string UserDescription { get; set; } = null!;

    [BsonIgnoreIfNull]
    public List<Package>? Packages { get; set; }
}

