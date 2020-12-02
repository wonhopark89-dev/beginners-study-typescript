import getUniqueId from '../utils/getUniqueId';
import truncate from '../utils/truncate';

class Expense {
    private label: string;
    private amount: number;
    private date: Date;
    private id: string;

    constructor(label: string, amount: number, date: Date | string) {
        this.updateLabel(label);
        this.updateAmount(amount);
        this.updateDate(date);
        this.id = getUniqueId();
    }

    getId(): string {
        // step 2: create method to return property
        return this.id;
    }

    getLabel(): string {
        return this.label;
    }

    updateLabel(label: string): void {
        this.label = truncate(label, 10);
    }

    getAmount(): number {
        return this.amount;
    }

    updateAmount(amount: number) {
        this.amount = amount;
    }

    getDate(): Date {
        return this.date;
    }

    updateDate(date: Date | string) {
        this.date = new Date(date);
    }
}

export default Expense;
