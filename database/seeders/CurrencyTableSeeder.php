<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Currency;

class CurrencyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = [
            [
                'icon' => 'bitcoin_icon.png',
                'name' => 'Bitcoin BTC',
                'price' => 10000,
                'rate' => 6.00
            ],
            [
                'icon' => 'ethereum_icon.png',
                'name' => 'Ethereum ETH',
                'price' => 2200,
                'rate' =>  -7.02
            ],
            [
                'icon' => 'litecoin_icon.png',
                'name' => 'Ripple XRE',
                'price' => 5800,
                'rate' =>  6.41
            ],
            [
                'icon' => 'ripple_icon.png',
                'name' => 'LiteCoin LTC',
                'price' => 75100,
                'rate' => 3.50
            ],
        
        ];

        foreach ($currencies as $currency) {

            Currency::create($currency);

        }//end of for each
    }
}
