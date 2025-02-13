

export const scheduleEventController = async (req: Request, res: Response): Promise<void> => {
    const { nameCouple, dateEvent, amountGuests, place, value, menu, selectedTeams } = req.body

    const sql = `INSERT INTO events (nameCouple, dateEvent, amountGuests, place, value, menu, selectedTeams)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [nameCouple, dateEvent, amountGuests, place, value, menu, JSON.stringify(selectedTeams)], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao salvar evento' });
        }
        res.status(201).json({ message: 'Evento cadastrado com sucesso!', id: result.insertId });
    });
}

