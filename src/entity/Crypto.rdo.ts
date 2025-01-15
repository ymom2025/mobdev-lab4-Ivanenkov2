export interface ICrypto{
    id: string;
    name: string;
    symbol: string;
    circulating_supply: string;
    total_supply: string;
    max_supply: string;
    last_updated: string;
    date_added: string;
    quote: USD[]
}

export interface USD{
    price: string;
    volume_24h: string;
    percent_change_1h: string;
    percent_change_24h: string;
    percent_change_7d: string;
    market_cap: string;
    last_updated: string;
}