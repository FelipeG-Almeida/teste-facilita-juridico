/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Modal.css';

export default function Modal(props) {
	if (!props.show) {
		return null;
	}

	const [formData, setFormData] = useState({
		nome: '',
		email: '',
		telefone: '',
		x: 0,
		y: 0,
	});

	const [clientesOrdered, setClientesOrdered] = useState([]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await axios.post('http://localhost:3003/clientes/cadastro', formData);
		props.onClose();
		props.refresh();
	};

	async function fetchClientesOrdered() {
		const result = await axios.get('http://localhost:3003/clientes/rota');
		setClientesOrdered(result.data);
	}

	useEffect(() => {
		fetchClientesOrdered();
	}, []);

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title">
						{props.type === 'cadastro'
							? 'Cadastrar Cliente'
							: 'Visualizar Rotas'}
					</h4>
				</div>

				{props.type === 'cadastro' ? (
					<form onSubmit={handleSubmit}>
						<div className="modal-body">
							<label htmlFor="nome">Nome</label>
							<input
								type="text"
								id="nome"
								name="nome"
								value={formData.nome}
								onChange={handleChange}
							/>

							<label htmlFor="email">E-mail</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
							/>

							<label htmlFor="telefone">Telefone</label>
							<input
								type="tel"
								id="telefone"
								name="telefone"
								value={formData.telefone}
								onChange={handleChange}
							/>

							<label htmlFor="x">Coordenada X</label>
							<input
								type="number"
								id="x"
								name="x"
								value={formData.x}
								onChange={handleChange}
							/>

							<label htmlFor="y">Coordenada Y</label>
							<input
								type="number"
								id="y"
								name="y"
								value={formData.y}
								onChange={handleChange}
							/>
						</div>

						<div className="modal-footer">
							<button onClick={props.onClose}>Cancelar</button>
							<button type="submit">Salvar</button>
						</div>
					</form>
				) : (
					<>
						<div className="modal-body">
							<table>
								<thead>
									<th>Ordem</th>
									<th>Cliente</th>
									<th>Coordenadas</th>
								</thead>
								<tbody>
									{clientesOrdered?.map((cliente, index) => (
										<tr key={cliente.id}>
											<td>Nº {index + 1}</td>
											<td>{cliente.nome}</td>
											<td>
												({cliente.x}, {cliente.y})
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="modal-footer">
							<button onClick={props.onClose}>Cancelar</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
