import * as service from '../services/marketpricesService.js';

export function getMarketprices(req, res) {
    service.getMarketprices(req, res);
}

export function findByprovince(req, res) {
    service.findByprovince(req, res);
}

