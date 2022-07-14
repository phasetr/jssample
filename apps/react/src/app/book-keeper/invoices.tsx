import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from './react-data';

export default function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            const filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get('filter');
            if (!filter) {
              return true;
            }
            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }: { isActive: boolean }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/book-keeper/invoices/${invoice.number.toString()}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
