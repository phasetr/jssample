import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "./react-data";

export default function Invoice() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const id = params['invoiceId'] ? Number(params["invoiceId"]) : 0;
  const invoice = getInvoice(id);
  return (
    <main style={{ padding: "1rem" }}>
      {invoice ? (
        <>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
          <p>
            <button
              onClick={() => {
                if (invoice) {
                  deleteInvoice(invoice.number);
                }
                navigate("/book-keeper/invoices" + location.search);
              }}
            >
              Delete
            </button>
          </p>
        </>
      ) : (
        "No invoice"
      )}
    </main>
  );
}
