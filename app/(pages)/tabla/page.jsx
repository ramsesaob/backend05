'use client';
import { useEffect, useState } from 'react'
import Card from '../../components/Card';
import { PrimeReactProvider } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const API = 'https://dummyjson.com/products?limit=10&skip=';
const tabla = () => {
    const [datos, setDatos] = useState(null);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const URI = API + skip
    const fetchDatos = async () => {
        const response = await fetch(URI);
        const data = await response.json();
        setDatos(data.products);
        setTotal(data.total)
        setLoading(false);
    };
    useEffect(() => {
        fetchDatos();
    }, [skip]);

    if (loading) {
        return (
            <div className="container">

                <h4 className="text-center py-4">Cargando...</h4>
            </div>
        );
    }

    return (



        <div className="container">
            <h3 className="text-center py-4">Inicio</h3>
            <div className="">

                <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id"
                    filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
                    emptyMessage="No customers found.">
                    <Column field="id" header="ID"></Column>
                    <Column field="thumbnail" header="Foto" body={(rowData) => <img src={rowData.thumbnail} alt={rowData.title} width="50" />} />
                    <Column field="title" header="Nombre"></Column>
                    <Column field="category" header="Categoria"></Column>
                    <Column field="stock" header="Cantidad"></Column>
                    <Column field="price" header="Precio"></Column>
                    <Column header="Total" body={(rowData) => (rowData.price * rowData.stock).toFixed(2)} />
                </DataTable>
            </div>
        </div>



    )
}

export default tabla