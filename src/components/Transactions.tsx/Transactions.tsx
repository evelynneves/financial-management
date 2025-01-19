import React, { ChangeEvent, useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, SelectChangeEvent } from '@mui/material';
import styles from './Transactions.module.scss'; // Importação do arquivo de estilos

const Transactions = () => {
    const [transacaoTipo, setTransacaoTipo] = useState('deposito');
    const [valor, setValor] = useState('');

    const handleTipoChange = (event: SelectChangeEvent<string>) => { 
        setTransacaoTipo(event.target.value); 
    };

    const handleValorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValor(event.target.value);
    };

    const handleSubmit = () => {
        console.log(`Tipo: ${transacaoTipo}, Valor: ${valor}`);
    };

    return (
        <Box className={styles.transactionsContainer}>
            <Typography variant="h4" className={styles.title}>Nova transação</Typography>
            <Box className={styles.inputWrapper}>
                <InputLabel className={styles.customLabel}>Selecione o tipo de transação</InputLabel>
                <FormControl variant="outlined" margin="normal" className={styles.dropdown}>
                    <Select
                        value={transacaoTipo}
                        onChange={handleTipoChange}
                        className={styles.customInput}
                    >
                        <MenuItem value="deposito">Depósito</MenuItem>
                        <MenuItem value="transferencia">Transferência</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className={styles.inputWrapper}>
                <InputLabel className={styles.customLabel}>Valor</InputLabel>
                <FormControl margin="normal" className={styles.input}>
                    <TextField
                        value={valor}
                        onChange={handleValorChange}
                        variant="outlined"
                        placeholder="00,00"
                        className={styles.customInput} // Classe personalizada
                    />
                </FormControl>
            </Box>
            <Button variant="contained" className={styles.submitButton} onClick={handleSubmit}>
                Concluir transação
            </Button>
        </Box>
    );
};

export default Transactions;
