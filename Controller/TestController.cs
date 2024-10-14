using Microsoft.AspNetCore.Mvc;

// http://localhost:5066/api/Test
[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    // app.MapGet("/test", () => "Hello World!");
    // http://localhost:5066/api/Test/test
    [HttpGet()]
    public string GetHelloWorldText()
    {
        return "Hello World2!";
    }
}