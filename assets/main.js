function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Tutup Termos',
                'Keselek Panci',
                'Kuasa Elemental',
                'Gorengan India',
                'Sendal jepit',
                'Kucing Terbang',
                'Tahu Bulat',
                'Tikus Bengek',
                'Ikan Terbang',
                'Motor Kesleo',
                'Helem Salto',
                'Meja Bengek',
                'Tv Ngantuk',
                'Jerapah Push Up',
                'Sekopekop',
                'Jam Turu',
                'Tengo',
                'Air AHQA',
                'Karpet Terbang',
                'Air Turu',
                'Charger Guling',
                'Kabel Style Halal',
                'Rumput Turu',
                'Sapi Banteng',

            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});