// ContactListUi.js
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidV4 } from "uuid";
const ContactListUi = () => {
const [contacts, setContacts] = useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedContact, setSelectedContact] = useState({});
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [search, setSearch] = useState("");
const handleClose = () => {
setShowModal(false);
setSelectedContact({});
setName("");
setPhone("");
};
const handleSave = () => {
if (!name || !phone) {
return toast.error("Please Enter Mandatory Fields, error");
}
if (!/^[6-9]{1}[0-9]{9}$/.test(phone)) {
return toast.error("Please Enter Valid Phone Number, error");
}
if (selectedContact.id) {
// Edit existing contact
const copyOfContacts = [...contacts];
copyOfContacts.forEach((contact) => {
if (contact.id === selectedContact.id) {
contact.name = name;
contact.phone = phone;
}
return contact;
});
setContacts(copyOfContacts);
} else {
// Add new contact
const addContact = [...contacts, { id: uuidV4(), name, phone }];
setContacts(addContact);
}
handleClose();
};
const handleEdit = (contact) => {
setSelectedContact(contact);
setName(contact.name);
setPhone(contact.phone);
setShowModal(true);
};
const handleDelete = (id) => {
const deleteSelectedContact = contacts.filter((contact) => contact.id !== id);
setContacts(deleteSelectedContact);
};
const filteredContacts = contacts.filter((contact) =>
contact.name.toLowerCase().trim().includes(search.toLowerCase().trim())
);
return (
<div>
<ToastContainer />
<div className="d-flex justify-content-center my-3">
<input
className="mx-1 p-1 border-1 rounded-1"
type="text"
value={search}
placeholder="search..."
onChange={(e) => setSearch(e.target.value)}
/>
<Button variant="primary" onClick={() => setShowModal(true)}>
Add
</Button>
</div>
<Modal show={showModal} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>
{selectedContact.id ? "Edit Contact" : "Add Contact"}
</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
<Form.Group controlId="formName">
<Form.Label>
Name <span style={{ color: "red" }}>*</span>
</Form.Label>
<Form.Control
type="text"
placeholder="Enter Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</Form.Group>
<br />
<Form.Group controlId="formphone">
<Form.Label>
Phone Number <span style={{ color: "red" }}>*</span>
</Form.Label>
<Form.Control
type="number"
placeholder="Enter phone Number"
value={phone}
onChange={(e) => setPhone(e.target.value)}
/>
</Form.Group>
</Form>
</Modal.Body>
<Modal.Footer>
<Button variant="danger" onClick={handleClose}>
Close
</Button>
<Button variant="success" onClick={handleSave}>
Save
</Button>
</Modal.Footer>
</Modal>
<div>
{filteredContacts.map((contact) => (
<div key={contact.id} className="contact-list">
<div className="d-flex align-items-center">
<CgProfile style={{ fontSize: "30px" }} />
<div className="mx-2">
<h4> {contact.name}</h4>
<p>{contact.phone}</p>
</div>
</div>
<div>
<BiEditAlt onClick={() => handleEdit(contact)} className="mx-1"
style={{ cursor:'pointer'}} />
<MdDelete
style={{ color: "red", cursor:'pointer'}}
className="mx-1"
onClick={() => handleDelete(contact.id)}
/>
</div>
</div>
))}
</div>
</div>
);
};
export default ContactListUi;