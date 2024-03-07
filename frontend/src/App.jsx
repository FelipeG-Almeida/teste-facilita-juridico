import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Modal from './components/modal/Modal';

function App() {
	const [clientes, setClientes] = useState([]);
	const [showModal, setShowModal] = useState(false);

	async function fetchClientes() {
		const result = await axios.get('http://localhost:3003/clientes');
		setClientes(result.data);
	}

	useEffect(() => {
		fetchClientes();
	}, []);

	return (
		<>
			<header>
				<h1>Clientes</h1>
			</header>

			<main>
				<button onClick={() => setShowModal(true)}>Novo Cliente</button>
				<table>
					<thead>
							<th>Cliente</th>
							<th>E-mail</th>
							<th>Telefone</th>
					</thead>
					<tbody>
						{clientes?.map((cliente) => (
							<tr key={cliente.id}>
								<td>{cliente.nome}</td>
								<td>{cliente.email}</td>
								<td>{cliente.telefone}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>

			<Modal
				onClose={() => setShowModal(false)}
				show={showModal}
				refresh={fetchClientes}
			/>
		</>
	);
}

export default App;
