using Microsoft.AspNetCore.Mvc;
using Time_Tracker.Models;
using Time_Tracker.Services;

namespace Time_Tracker.Controllers;
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    // GET
    private readonly UsersService _usersService;

    public UsersController(UsersService usersService) =>
        _usersService = usersService;

    [HttpGet]
    public async Task<List<User>> Get() =>
        await _usersService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<User>> Get(string id)
    {
        var User = await _usersService.GetAsync(id);

        if (User is null)
        {
            return NotFound();
        }

        return User;
    }

    [HttpPost]
    public async Task<IActionResult> Post(User newUser)
    {
        await _usersService.CreateAsync(newUser);

        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, User updatedBook)
    {
        var User = await _usersService.GetAsync(id);

        if (User is null)
        {
            return NotFound();
        }

        updatedBook.Id = User.Id;

        await _usersService.UpdateAsync(id, updatedBook);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var User = await _usersService.GetAsync(id);

        if (User is null)
        {
            return NotFound();
        }

        await _usersService.RemoveAsync(id);

        return NoContent();
    }
}