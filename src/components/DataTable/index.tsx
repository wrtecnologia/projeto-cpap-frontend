import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/cpap?minDate=2023-01-05&maxDate=2023-12-31&page=0&size=100`)
        .then(response => {
                setPage(response.data);
            });
    }, [activePage])

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return (
        <>
            <Pagination page={page} onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Eventos/hora</th>
                            <th>Horas de uso</th>
                            <th>Pontuação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.data, "dd/MM/yyyy")}</td>
                                <td>{item.eventos_hora}</td>
                                <td>{item.horas_uso}</td>
                                <td>{item.pontuacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;