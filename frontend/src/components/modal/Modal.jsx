/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from 'react';
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
	});

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

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title">Cadastrar Cliente</h4>
				</div>

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
							value={formData.message}
							onChange={handleChange}
						/>
					</div>

					<div className="modal-footer">
						<button onClick={props.onClose}>Cancelar</button>
						<button type="submit">Salvar</button>
					</div>
				</form>
			</div>
		</div>
	);
}
