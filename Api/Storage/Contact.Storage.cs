public class ContactStorage
{
    private List<Contact> Contacts { get; set; }

    public ContactStorage()
    {
        this.Contacts = new List<Contact>();

        for (int i = 1; i <= 5; i++)
        {
            this.Contacts.Add(new Contact()
            {
                Id = i,
                Name = $"Полное имя {i}",
                Email = $"{Guid.NewGuid().ToString().Substring(0, 5)}_{i}@pochtovik.ru",
            });
        }
    }



    public List<Contact> GetContacts()
    {
        return this.Contacts;
    }

    public bool Add(Contact contact)
    {
        foreach (var item in Contacts)
        {
            if (item.Id == contact.Id)
            {
                return false;
            }

        }
        Contacts.Add(contact);
        return true;
    }

    public bool Remove(int id)
    {
        Contact contact;
        for (int i = 0; i < this.Contacts.Count; i++)
        {
            if (this.Contacts[i].Id == id)
            {
                contact = this.Contacts[i];
                this.Contacts.Remove(contact);
                return true;
            }
        }
        return false;
    }

    public bool UpdateContact(ContactDto contactDto, int id)
    {
        Contact contact;
        for (int i = 0; i < Contacts.Count; i++)
        {
            if (Contacts[i].Id == id)
            {
                contact = Contacts[i];
                if (!String.IsNullOrEmpty(contactDto.Email))
                {
                    contact.Email = contactDto.Email;
                }
                if (!String.IsNullOrEmpty(contactDto.Name))
                {
                    contact.Name = contactDto.Name;
                }
                return true;
            }
        }
        return false;
    }

    public (int, Contact) SearchContact(int id)
    {
        Contact contact;
        for (int i = 0; i < Contacts.Count; i++)
        {
            //if (int.TryParse(Contacts[i].Id, out int int_id))
            if (!(id is int) || id <= 0) return (2, null);

            if (Contacts[i].Id == id)
            {
                contact = Contacts[i];
                return (1, contact);
            }
        }
        return (0, null);
    }
}