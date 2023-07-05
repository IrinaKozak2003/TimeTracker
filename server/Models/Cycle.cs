namespace Time_Tracker.Models;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
public class Cycle
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public User User { get; set; } = null!;
    public TimeOnly CycleTime { get; set; }
    public Package Package { get; set; } = null!;
    public decimal Budget { get; set; }
    public string Comment { get; set; } = null!;

}