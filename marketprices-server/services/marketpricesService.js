export function getMarketprices(req, res) {
    res.send([{
        "province": "Málaga",
        "year": 2009,
        "pib_current_price": 29099895.7008426,
        "pib_percentage_structure": 19.506248756,
        "pib_variation_rate": -5.908205079
    }]);
}

export function findByprovince(req, res) {
    res.send({
        "province": "Málaga",
        "year": 2009,
        "pib_current_price": 29099895.7008426,
        "pib_percentage_structure": 19.506248756,
        "pib_variation_rate": -5.908205079
    });
}

