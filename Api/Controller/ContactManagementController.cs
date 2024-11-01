using Microsoft.AspNetCore.Mvc;

public class ContactManagementController : BaseController
{
    private readonly ContactStorage storage;

    public ContactManagementController(ContactStorage storage)
    {
        this.storage = storage;
    }

    [HttpPost("contacts")]
    public IActionResult Create([FromBody] Contact contact)
    {
        bool res = storage.Add(contact);
        if (res)
        {
            return Created();
        }
        return Conflict("Контакт с указанным ID существует");// 409
    }

    [HttpGet("contacts")]
    public ActionResult<List<Contact>> GetContacts()
    {
        return Ok(storage.GetContacts());
    }

    [HttpDelete("contacts/{id}")]
    public IActionResult DeleteContact(int id)
    {
        bool res = storage.Remove(id);
        if (res) return NoContent();
        return BadRequest("Ошибка ID");// 400
    }

    [HttpPut("contacts/{id}")]
    public IActionResult UpdateContact([FromBody] ContactDto contactDto, int id)
    {
        bool res = storage.UpdateContact(contactDto, id);
        if (res) return Ok();
        return Conflict("Контакт с указанным ID не нашёлся");// 409
    }

    [HttpGet("contacts/{id}")]
    public ActionResult<Contact> SearchContact(int id)
    {
        (int, Contact) res = storage.SearchContact(id);
        if (res.Item1 == 0) return NotFound("Контакт не найден");
        if (res.Item1 == 2) return BadRequest("Ошибка ID");// 400
        return Ok(res.Item2); // 200

    }
}