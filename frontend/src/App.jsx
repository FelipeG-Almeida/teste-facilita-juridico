import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Modal from './components/modal/Modal';

function App() {
	const [clientes, setClientes] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState('');

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
				<button
					className="botao"
					onClick={() => {
						setShowModal(true);
						setModalType('cadastro');
					}}
				>
					Novo Cliente
				</button>
				<button
					className="botao"
					onClick={() => {
						setShowModal(true);
						setModalType('rotas');
					}}
				>
					Visualizar Rotas
				</button>
				<table>
					<thead>
						<th>Nome</th>
						<th>E-mail</th>
						<th>Telefone</th>
						<th>Coordenada X</th>
						<th>Coordenada Y</th>
					</thead>
					<tbody>
						{clientes?.map((cliente) => (
							<tr key={cliente.id}>
								<td>{cliente.nome}</td>
								<td>{cliente.email}</td>
								<td>{cliente.telefone}</td>
								<td>{cliente.x}</td>
								<td>{cliente.y}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>

			<Modal
				onClose={() => setShowModal(false)}
				show={showModal}
				type={modalType}
				refresh={fetchClientes}
			/>
		</>
	);
}

export default App;
