const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });

        it('слова добавляются и возвращаются корректно', () => {
            const dic = new core.Dictionary();
            dic.add("философия", "особая форма познания мира, вырабатывающая систему знаний о наиболее общих характеристиках");
            dic.add("религия", "система верований, обрядов, ритуалов и доктрин, связанных с поклонением высшим силам");
            dic.add("культура", null);
            assert.strictEqual(dic.get("философия"), "особая форма познания мира, вырабатывающая систему знаний о наиболее общих характеристиках");
            assert.strictEqual(dic.get("религия"), "система верований, обрядов, ритуалов и доктрин, связанных с поклонением высшим силам");
            assert.strictEqual(dic.get("культура"), undefined);
        });

        it('слова удаляются', () => {
            const dic = new core.Dictionary();
            dic.add("философия", "особая форма познания мира, вырабатывающая систему знаний о наиболее общих характеристиках");
            dic.delete("философия");        
            assert.strictEqual(dic.get("философия"), undefined);
        });

    });
});