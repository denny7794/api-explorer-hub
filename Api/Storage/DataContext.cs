//это правильный способ для хранения данных
public class DataContext
{
    public DataContext()
    {
        this.Str = String.Empty;
    }
    public string Str { get; set; }
}