using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
namespace Time_Tracker.Models;


public class Package
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")]
    public string PackageName { get; set; } = null!;
    public decimal PackageBudget { get; set; }
    public decimal UsedPackageBudget { get; set; }
    public string PackageDescription { get; set; } = null!;
    public List<User>? Users { get; set; } = null!;
    public TimeOnly TotalTime { get; set; } 
}